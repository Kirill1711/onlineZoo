<?php
header('Content-Type: application/json');

require __DIR__ . '/db-contacts.php';

if (!isset($mysqli) || !$mysqli instanceof mysqli) {
    error_log('Contact form: DB connection not established');
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Внутренняя ошибка сервера']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$text = trim($_POST['text'] ?? '');

if (!$name || !$email || !$text || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Заполните все поля корректно']);
    exit;
}

if (mb_strlen($name) > 100 || mb_strlen($text) > 1500) {
    echo json_encode(['success' => false, 'message' => 'Слишком длинное сообщение']);
    exit;
}

$stmt = $mysqli->prepare("INSERT INTO contacts (name, email, text) VALUES (?, ?, ?)");
if (!$stmt) {
    error_log('Contact form: Prepare failed: ' . $mysqli->error);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка базы данных']);
    exit;
}

$stmt->bind_param("sss", $name, $email, $text);

if (!$stmt->execute()) {
    error_log('Contact form: Execute failed: ' . $stmt->error);
    $stmt->close();
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка сохранения сообщения']);
    exit;
}

$stmt->close();
echo json_encode(['success' => true, 'message' => 'Сообщение отправлено']);