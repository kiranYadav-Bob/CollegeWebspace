
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', padding: '2rem' }}>
            <h1>College Webspace</h1>
            <p>Welcome to your new React app!</p>
            <div style={{ marginTop: '2rem' }}>
                <button onClick={() => setCount((count) => count + 1)} style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>
                    count is {count}
                </button>
            </div>
        </div>
    )
}

export default App
