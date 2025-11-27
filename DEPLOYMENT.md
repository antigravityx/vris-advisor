# 🚀 Guía de Deployment - VRIS Advisor

## GitHub Repository
✅ **Código Asegurado**: https://github.com/antigravityx/vris-advisor

## Deployment Online

### Opción 1: Vercel (Frontend) + Render (Backend) [RECOMENDADO]

#### Frontend en Vercel (Gratis)
1. Ve a https://vercel.com/
2. Click "Add New" → "Project"
3. Importa `antigravityx/vris-advisor`
4. **Framework Preset**: Vite
5. **Root Directory**: `frontend`
6. **Build Command**: `npm run build`
7. **Output Directory**: `dist`
8. Click "Deploy"
9. **URL**: Te darán algo como `vris-advisor.vercel.app`

#### Backend en Render (Gratis)
1. Ve a https://render.com/
2. Click "New" → "Web Service"
3. Conecta tu GitHub: `antigravityx/vris-advisor`
4. **Root Directory**: `backend`
5. **Build Command**: `pip install -r requirements.txt`
6. **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
7. **Environment**: Python 3
8. Click "Create Web Service"
9. **URL**: Te darán algo como `vris-advisor-backend.onrender.com`

#### Conectar Frontend con Backend
10. En Vercel, ve a tu proyecto → Settings → Environment Variables
11. Agrega: `VITE_API_URL` = `https://tu-backend.onrender.com`
12. Redeploy el frontend

### Opción 2: Railway (Todo en uno)
1. Ve a https://railway.app/
2. "New Project" → "Deploy from GitHub repo"
3. Selecciona `antigravityx/vris-advisor`
4. Se detectarán automáticamente frontend y backend
5. Deploy

## URLs Esperadas
- **Frontend**: https://vris-advisor-[tu-id].vercel.app
- **Backend**: https://vris-advisor-backend-[tu-id].onrender.com
- **Repositorio**: https://github.com/antigravityx/vris-advisor

## Notas Importantes
- Render (free tier) puede tardar ~30s en "despertar" la primera vez
- Vercel es instantáneo
- Las URLs se generan automáticamente al deployar
