<?php
header('Content-Type: application/json');
require __DIR__ . '/db-contacts.php';

$stmt = $mysqli->prepare("SELECT * FROM contacts");
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка подготовки запроса']);
    exit;
}

$stmt->execute();
$result = $stmt->get_result();

$contacts = [];
while ($row = $result->fetch_assoc()) {
    $contacts[] = $row;
}

$stmt->close();

echo json_encode(['success' => true, 'data' => $contacts]);