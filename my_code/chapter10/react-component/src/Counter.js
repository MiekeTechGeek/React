import { useState } from 'react';
// Component 2: Counter with prompt and state
function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => setCount(count + step);
    const decrement = () => setCount(count - step);
    const reset = () => setCount(0);

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter</h2>

            {/* Prompt */}
            <p className="text-gray-600 mb-4">
                Use the buttons below to increment, decrement, or reset the counter. You can also adjust the step size!
            </p>

            {/* Step size control */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Step size: {step}
                </label>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={step}
                    onChange={(e) => setStep(parseInt(e.target.value))}
                    className="w-full"
                />
            </div>

            {/* Counter display */}
            <div className="text-center mb-6">
                <div className="text-6xl font-bold text-blue-600 mb-4">
                    {count}
                </div>
            </div>

            {/* Control buttons */}
            <div className="flex gap-2 justify-center mb-4">
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                    -{step}
                </button>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                    Reset
                </button>
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                    +{step}
                </button>
            </div>

            {/* State display */}
            <div className="p-2 bg-green-50 rounded text-sm">
                <strong>State:</strong> Count = {count}, Step = {step}
            </div>
        </div>
    );
}

export default Counter



