import { useEffect, useRef, useMemo, useState } from "react";

const DrawingCanvas = () => {
    
    
    // use ref hooks
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    // use state hooks
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
        const context = canvas.getContext("2d");
        canvas.height = 384;
        canvas.width = 600;
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;

        contextRef.current = context;
    }
    }, []);

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY)
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke();
        setIsDrawing(true);
        nativeEvent.preventDefault();
        
    }

    const draw = ({nativeEvent}) => {
        if (!isDrawing) {
            return;
        }
        
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke();
        nativeEvent.preventDefault();
    }

    const stopDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    return (<canvas className="bg-slate-600 text-green-300 border-2 border-fuchsia-400" 
    ref={canvasRef} onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={stopDrawing} onMouseLeave={stopDrawing}>
        Hello World
    </canvas>)
}

export default DrawingCanvas;