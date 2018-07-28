'use strict';

const canvas = document.querySelector('#c1');
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousedown', e => {
  canvas.addEventListener('mousemove', isPaint);
  canvas.addEventListener('click', isPaint);

  canvas.addEventListener('mouseup', e => {
    canvas.removeEventListener('mousemove', isPaint);
  });

  canvas.addEventListener('mouseleave', e => {
    canvas.removeEventListener('mousemove', isPaint);
  });
});

function isPaint(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  ctx.beginPath();
  ctx.fillStyle = getColor();
  ctx.strokeStyle = getColor();
  ctx.arc(x, y, document.querySelector('#brush').value, 0, 2*Math.PI);
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
}

function getColor() {
  return document.querySelector('#color').value;
}