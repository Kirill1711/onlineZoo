<?php
header('Content-Type: application/json');
require __DIR__ . './session.php';

$_SESSION = [];
session_destroy();

echo json_encode(['success' => true]);