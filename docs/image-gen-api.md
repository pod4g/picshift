# Image Generation API

## Endpoint

```
POST http://localhost:3000/api/generate-image
```

## Basic Example

```bash
curl -X POST http://localhost:3000/api/generate-image \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-3-pro-image-preview",
    "prompt": "A cute cartoon cat sitting on a wooden desk, pixel art style, transparent background",
    "sessionName": "test-session",
    "assetKey": "cat",
    "imageType": "character"
  }'
```

## Available Models

| Model ID | Name | Input Cost ($/M) | Output Cost ($/M) |
|---|---|---|---|
| `gemini-2.5-flash-image` | Nano Banana | 0.30 | 30.00 |
| `gemini-3.1-flash-image-preview` | Nano Banana 2 | 0.50 | 60.00 |
| `gemini-3-pro-image-preview` | Nano Banana Pro | 2.00 | 120.00 |

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `model` | string | Yes | Model ID from the table above |
| `prompt` | string | Yes | Image description |
| `sessionName` | string | Yes | Storage directory name (e.g. `test-session`) |
| `assetKey` | string | No | Filename without extension, saved as `.webp` |
| `imageType` | string | No | `character` / `background` / `item`. Characters preserve transparency; backgrounds do not |
| `referenceImageUrl` | string | No | Server-side path to reference image for character consistency |
| `referenceImageBase64` | string | No | Base64-encoded reference image (with or without `data:image/...;base64,` prefix) |

## Response

```json
{
  "imageUrl": "/games/test-session/cat.webp",
  "textContent": "Here is the cartoon cat...",
  "elapsed": 8500,
  "cost": 0.0387,
  "inputTokens": 50,
  "outputTokens": 340
}
```

- `imageUrl` — WebP image URL (relative to server root)
- `elapsed` — Generation time in milliseconds
- `cost` — Estimated cost in USD

## Character Consistency (Reference Image)

Pass a reference image so the model generates a consistent character in a new pose:

```bash
curl -X POST http://localhost:3000/api/generate-image \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-3-pro-image-preview",
    "prompt": "Generate a running pose of this exact same character, same art style and colors, transparent background",
    "sessionName": "test-session",
    "assetKey": "cat_running",
    "imageType": "character",
    "referenceImageUrl": "/games/test-session/cat.webp"
  }'
```

## Direct Google Vertex AI Call (Advanced)

If you need to call the underlying API directly without going through our server:

```bash
curl -X POST \
  "https://aiplatform.googleapis.com/v1/projects/{PROJECT_ID}/locations/{LOCATION}/publishers/google/models/gemini-3-pro-image-preview:generateContent" \
  -H "Authorization: Bearer $(gcloud auth print-access-token)" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{
      "role": "user",
      "parts": [{"text": "A cute cartoon cat, pixel art style, transparent background"}]
    }],
    "generationConfig": {
      "responseModalities": ["TEXT", "IMAGE"]
    }
  }'
```

Response contains image in `candidates[0].content.parts[]` as:

```json
{ "inlineData": { "mimeType": "image/png", "data": "<base64>" } }
```

### With Reference Image (Direct API)

```json
{
  "contents": [{
    "role": "user",
    "parts": [
      { "inlineData": { "mimeType": "image/png", "data": "<base64_of_reference_image>" } },
      { "text": "Generate a running pose of this exact same character, same art style and colors" }
    ]
  }],
  "generationConfig": {
    "responseModalities": ["TEXT", "IMAGE"]
  }
}
```
