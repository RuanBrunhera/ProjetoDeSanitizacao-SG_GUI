const toTimestamp = () => new Date().toISOString();

const buildErrorLogPayload = ({ error, req, status, message }) => ({
  timestamp: toTimestamp(),
  method:    req?.method || '',
  url:       req?.originalUrl || req?.url || '',
  status,
  message,
  stack:     error?.stack || ''
});

const buildLogPayload = ({ req, status, message }) => ({
  timestamp: toTimestamp(),
  method:    req?.method || '',
  url:       req?.originalUrl || req?.url || '',
  status,
  message,
});

export const logError = ({ error, req, status, message }) => {
  const payload = buildErrorLogPayload({ error, req, status, message });
  console.error('[ERROR]', payload);
};

export const logWarn = ({ req, status, message }) => {
  const payload = buildLogPayload({ req, status, message });
  console.warn('[WARN]', payload);
};

export const logInfo = ({ req, message }) => {
  const payload = buildLogPayload({ req, status: 200, message });
  console.info('[INFO]', payload);
};