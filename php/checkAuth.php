<?php
header('Content-Type: application/json');
require __DIR__ . './session.php';

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        'auth' => true,
        'name' => $_SESSION['name'],
        'email' => $_SESSION['email']
    ]);
} else {
    echo json_encode(['auth' => false]);
}