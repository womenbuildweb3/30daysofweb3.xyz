import React from 'react';

export default function ScrollSnap(){
    return (
        <div class="snap-x snap-mandatory h-screen overflow-scroll">
    <div class="snap-center bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl">1</div>
    <div class="snap-center bg-teal-200 w-screen  h-screen flex items-center justify-center text-8xl">2</div>
    <div class="snap-center bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">3</div>
    <div class="snap-center bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">4</div>
</div>
    )
}