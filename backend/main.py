from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="VRIS Advisor API", version="1.0.0")

# Configure CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    content: str
    user_id: str | None = None

class VRISResponse(BaseModel):
    response: str
    advisor_mode: str = "active"

@app.get("/")
async def root():
    return {"message": "VRIS Advisor API is online", "status": "active"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0"}

@app.post("/chat", response_model=VRISResponse)
async def chat_with_vris(message: Message):
    """
    Endpoint principal para chat con VRIS.
    TODO: Conectar con LM Studio o API de LLM.
    """
    # Por ahora, respuesta simple
    user_message = message.content
    
    # Simulación de respuesta inteligente
    response_text = f"VRIS Advisor: Entiendo tu mensaje '{user_message}'. Proximamente integraré inteligencia completa."
    
    return VRISResponse(
        response=response_text,
        advisor_mode="prototype"
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
