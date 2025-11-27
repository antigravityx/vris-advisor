# VRIS Advisor PWA

Progressive Web App con inteligencia VRIS. Registro fácil, chat inteligente y autonomía.

## Stack Tecnológico

- **Frontend**: React + Vite + PWA
- **Backend**: FastAPI (Python)
- **Auth**: Firebase (próximamente)
- **IA**: VRIS (Local/Cloud)

## Instalación

### Backend

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install fastapi uvicorn
```

### Frontend

```bash
cd frontend
npm install
```

## Ejecución

### 1. Iniciar Backend (Terminal 1)

```bash
cd backend
.\venv\Scripts\activate
python main.py
```

El API estará en `http://localhost:8000`

### 2. Iniciar Frontend (Terminal 2)

```bash
cd frontend
npm run dev
```

La app estará en `http://localhost:5173`

## Funcionalidades Actuales

✅ Chat con VRIS  
✅ PWA (Instalable)  
✅ API REST Backend  
⏳ Autenticación Firebase  
⏳ IA Completa (LM Studio)  

## Próximos Pasos

1. Integrar Firebase Auth
2. Conectar LM Studio para IA real
3. Agregar dashboard de usuario
4. Implementar capacidades autónomas
