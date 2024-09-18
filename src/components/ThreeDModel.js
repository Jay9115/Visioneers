import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import the GLTFLoader

const ThreeDModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        camera.position.z = 5;

        // Load Model
        const loader = new GLTFLoader();
        loader.load(
            '/assets/final.glb', // Update this to the path of your model
            (gltf) => {
                scene.add(gltf.scene);
                gltf.scene.position.set(0, 0, 0); // Set the position of the model
            },
            undefined, // OnProgress callback is optional
            (error) => {
                console.error('An error happened while loading the model:', error);
            }
        );

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            // If you need to animate the model, you can do it here
            renderer.render(scene, camera);
        };
        animate();

        // Resize Event Listener
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default ThreeDModel;
