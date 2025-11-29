# 🚀 DEPLOYMENT RÁPIDO - 5 MINUTOS

## ✅ Código ya está en GitHub
https://github.com/antigravityx/vris-advisor

## 🌐 Deploy Frontend (2 minutos)

### Opción A: Vercel (Recomendado - Más Rápido)
1. **Abre**: https://vercel.com/new
2. **Login con GitHub** (usa: antigravityx)
3. **Import Repository**: Busca `antigravityx/vris-advisor`
4. **Configure**:
   - Root Directory: `frontend`
   - Framework: Vite
   - Build: `npm run build`
   - Output: `dist`
5. **Deploy** → ¡Listo! Te dará URL como: `vris-advisor.vercel.app`

### Opción B: Netlify (Alternativa)
1. **Abre**: https://app.netlify.com/start
2. **Connect GitHub** → Selecciona `vris-advisor`
3. **Settings**:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
4. **Deploy**

## 🔧 Deploy Backend (3 minutos)

### Render (Gratis)
1. **Abre**: https://dashboard.render.com/select-repo?type=web
2. **Connect GitHub** → Selecciona `vris-advisor`
3. **Configure**:
   - Name: `vris-advisor-backend`
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - Environment: Python 3
4. **Create Web Service** → URL: `vris-advisor-backend.onrender.com`

## 🔗 Conectar Frontend con Backend
1. En Vercel/Netlify → Settings → Environment Variables
2. Agregar: `VITE_API_URL` = `https://tu-backend.onrender.com`
3. Redeploy

## 📝 Notas
- **Vercel**: Deployment instantáneo
- **Render Free**: Puede tardar 30s en "despertar" la primera vez
- **Ambos son 100% gratis**

---
**¿Necesitas ayuda?** Avísame en qué paso estás y te guío.
