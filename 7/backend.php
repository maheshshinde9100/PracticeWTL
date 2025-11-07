<?php
$con = mysqli_connect("localhost", "root", "", "test_db");
$action = $_POST["action"] ?? null;

// CREATE
if ($action === "create") {
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    $age = $_POST["age"] ?? "";
    $marks = $_POST["marks"] ?? "";

    if ($name && $email && $age && $marks) {
        $sql = $con->prepare("INSERT INTO students (name, email, age, marks) VALUES (?, ?, ?, ?)");
        $sql->bind_param("ssii", $name, $email, $age, $marks);
        $sql->execute();
    }
}

// DELETE
if ($action === "delete") {
    $name = $_POST["name"] ?? "";
    if ($name) {
        $sql = $con->prepare("DELETE FROM students WHERE name=?");
        $sql->bind_param("s", $name);
        $sql->execute();
    }
}

// UPDATE
if ($action === "update") {
    $name = $_POST["name"] ?? "";
    $marks = $_POST["marks"] ?? "";
    if ($name && $marks) {
        $sql = $con->prepare("UPDATE students SET marks=? WHERE name=?");
        $sql->bind_param("is", $marks, $name);
        $sql->execute();
    }
}

// READ
$result = mysqli_query($con, "SELECT * FROM students");

if (mysqli_num_rows($result) > 0) {
    echo "<table border='1'>
    <tr><th>Name</th><th>Email</th><th>Age</th><th>Marks</th><th>Action</th></tr>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
        <td>{$row['name']}</td>
        <td>{$row['email']}</td>
        <td>{$row['age']}</td>
        <td>{$row['marks']}</td>
        <td>
            <button onclick=\"updatedata('{$row['name']}')\">Update</button>
            <button onclick=\"deletedata('{$row['name']}')\">Delete</button>
        </td>
        </tr>";
    }
    echo "</table>";
} else {
    echo "No records found.";
}
?>


<!-- onclick=\"update('{$row['name']}') -->