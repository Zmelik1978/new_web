<?php
declare(strict_types=1);

$documentPath = __DIR__ . '/downloads/conference-program-dh2.data';

if (!is_file($documentPath) || !is_readable($documentPath)) {
    http_response_code(404);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method !== 'GET' && $method !== 'HEAD') {
    header('Allow: GET, HEAD');
    http_response_code(405);
    exit;
}

header('X-Robots-Tag: noindex, noarchive', true);
header('Content-Type: application/pdf');
header('Content-Disposition: inline; filename="conference-programme-dh2.pdf"');
header('Content-Length: ' . (string) filesize($documentPath));
header('Cache-Control: public, max-age=86400');

if ($method === 'GET') {
    readfile($documentPath);
}
