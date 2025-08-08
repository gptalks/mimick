import React, { useEffect, useState } from 'react'
import { useStore } from './state/store'

export default function App() {
  const {
    hotkey, setHotkey,
    cloudPolish, setCloudPolish,
    apiKey, setApiKey,
    model, setModel,
    devMode, setDevMode
  } = useStore()

  const [status, setStatus] = useState('Idle')

  useEffect(() => {
    // In a real build you'd wire Tauri commands / events here.
  }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 24, maxWidth: 720 }}>
      <h1>VoiceApp (Placeholder)</h1>
      <p>Menu bar app scaffold. Press & hold <b>{hotkey}</b> for push-to-talk (Fn by default). This UI represents the settings window.</p>

      <section style={{ marginTop: 24 }}>
        <h3>Hotkey</h3>
        <select value={hotkey} onChange={e => setHotkey(e.target.value)}>
          <option value="Fn">Fn (default)</option>
          <option value="Option+Space">Option+Space</option>
          <option value="Ctrl+Shift+D">Ctrl+Shift+D</option>
        </select>
      </section>

      <section style={{ marginTop: 24 }}>
        <h3>Model</h3>
        <select value={model} onChange={e => setModel(e.target.value as any)}>
          <option value="small">Whisper Small (default)</option>
          <option value="tiny">Whisper Tiny (faster)</option>
          <option value="medium">Whisper Medium (more accurate)</option>
        </select>
      </section>

      <section style={{ marginTop: 24 }}>
        <h3>Cloud Polish</h3>
        <label>
          <input type="checkbox" checked={cloudPolish} onChange={e => setCloudPolish(e.target.checked)} />
          {' '}Enable OpenAI polish ("Fix grammar, punctuation, and clarity.")
        </label>
        <div style={{ marginTop: 8 }}>
          <input
            placeholder="OpenAI API Key"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h3>Developer Mode</h3>
        <label>
          <input type="checkbox" checked={devMode} onChange={e => setDevMode(e.target.checked)} />
          {' '}Show debug toasts & live logs (scaffold)
        </label>
      </section>

      <section style={{ marginTop: 24 }}>
        <h3>Status</h3>
        <div>{status}</div>
      </section>

      <section style={{ marginTop: 24, opacity: 0.8 }}>
        <h3>Note</h3>
        <p>This is a scaffold UI. Audio, ASR, VAD, paste injection, logging, and updater are wired on the Rust/CI side as stubs.</p>
      </section>
    </div>
  )
}
