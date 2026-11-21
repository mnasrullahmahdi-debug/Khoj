FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY server.py .
COPY static ./static
CMD ["sh","-c","gunicorn -w 1 --threads 4 -b 0.0.0.0:${PORT:-5000} server:app --access-logfile /dev/null"]
