<?php
header('Content-Type: application/json');
require __DIR__ . './db-users.php';
require __DIR__ . './session.php';

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

$stmt = $mysqli->prepare("SELECT id, name, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();
$user = $result->fetch_assoc();

if (!$user || !password_verify($password, $user['password'])) {
    echo json_encode(['success' => false, 'message' => 'Неверные данные']);
    exit;
}

// 🔥 создаём сессию
$_SESSION['user_id'] = $user['id'];
$_SESSION['name'] = $user['name'];
$_SESSION['email'] = $email;

echo json_encode([
    'success' => true,
    'name' => $user['name'],
    'email' => $email
]);