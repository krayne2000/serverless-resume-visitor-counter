def lambda_handler(event, context):
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "text/html; charset=utf-8"},
        "body": """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Resume Visitor Counter</title>
  <style>
    body { min-height: 100vh; margin: 0; display: grid; place-items: center; background: #0f172a; color: #e2e8f0; font-family: Arial, sans-serif; }
    main { width: min(32rem, calc(100% - 2rem)); padding: 2.5rem; border: 1px solid #334155; border-radius: 1rem; background: #1e293b; box-sizing: border-box; text-align: center; }
    .count { margin: 1rem 0; color: #38bdf8; font-size: 4rem; font-weight: 700; }
  </style>
</head>
<body>
  <main>
    <p>AWS serverless portfolio project</p>
    <h1>Resume Visitor Counter</h1>
    <div class="count">Visitor count: 1</div>
    <p>Recorded visits</p>
  </main>
</body>
</html>""",
    }
