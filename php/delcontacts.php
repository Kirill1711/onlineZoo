<?php
header('Content-Type: application/json');

require __DIR__ . '/db-contacts.php';

$id = $_POST['id'] ?? null;

$response = [
    "success" => false,
    "message" => ""
];

if ($id) {
    $stmt = $mysqli->prepare("DELETE FROM contacts WHERE id = ?");
    
    if ($stmt) {
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            if ($stmt->affected_rows > 0) {
                $response["success"] = true;
                $response["message"] = "Удалено";
            } else {
                $response["message"] = "ID не найден";
            }
        } else {
            $response["message"] = $stmt->error;
        }
        
        $stmt->close();
    } else {
        $response["message"] = $mysqli->error;
    }
} else {
    $response["message"] = "ID не указан";
}

$mysqli->close();

echo json_encode($response);
exit;