
import { SHI_CHEN } from '@/common/constants';
import jieqi from '@/common/jieqi';
import { action, observable, makeAutoObservable, computed } from 'mobx';

const earthlyBranches = Array.from(SHI_CHEN.values())

class Clock {
  canvas: any;
  context: any;
  interval: any;
  centerX: number;
  centerY: number;
  radius: number;

  @observable time: string = '';
  @observable currentShichen: any;

  constructor() {
    makeAutoObservable(this);
    jieqi.initLunar();
  }

  drawClock(canvas?: any) {
    if (!this.canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
      this.centerX = canvas.width / 2;
      this.centerY = canvas.height / 2;
      this.radius = canvas.width * 0.4;
    }

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawClockFace();
    this.drawHourMarkers();
    this.drawEarthlyBranches();
    this.drawClockHands();
    this.updateDisplay();
  }

  drawClockFace() {
    const { context, centerX, centerY, radius } = this;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.strokeStyle = 'black';
    context.lineWidth = 4;
    context.stroke();
  }

  drawHourMarkers() {
    const { context, centerX, centerY, radius } = this;

    for (let i = 0; i < 24; i++) {
      const angle = (2 * Math.PI * i) / 24;
      const x1 = centerX + radius * Math.cos(angle - Math.PI / 2);
      const y1 = centerY + radius * Math.sin(angle - Math.PI / 2);
      const x2 = centerX + (radius + 30) * Math.cos(angle - Math.PI / 2);
      const y2 = centerY + (radius + 30) * Math.sin(angle - Math.PI / 2);

      context.font = 'bold 28px Arial';
      context.fillStyle = '#333';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(i.toString(), x2, y2);

      context.beginPath();
      if (i % 2 == 0) {
        context.arc(x1, y1, 4, 0, 4 * Math.PI)
        context.fillStyle = '#484848'; // 
      } else {
        context.arc(x1, y1, 8, 0, 8 * Math.PI)
        context.fillStyle = '#F75D59'; // 
      }

      context.fill();
    }
  }

  drawEarthlyBranches() {
    const { context, centerX, centerY, radius } = this;

    for (let i = 0; i < 12; i++) {
      const angle = (2 * Math.PI * i) / 12;
      const x = centerX + (radius - 32) * Math.cos(angle - Math.PI / 2);
      const y = centerY + (radius - 32) * Math.sin(angle - Math.PI / 2);
      context.font = 'bolder 36px Arial';
      context.fillStyle = 'black'; // Sky Blue
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(earthlyBranches[i].name, x, y);
    }
  }

  drawClockHands() {
    const { context, centerX, centerY, radius } = this;

    const now = new Date();
    const hours = now.getHours() % 24;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    this.drawClockHand(
      centerX,
      centerY,
      (2 * Math.PI * (hours + minutes / 60)) / 24,
      radius * 0.5,
      'black',
      8
    );

    this.drawClockHand(
      centerX,
      centerY,
      (2 * Math.PI * (minutes + seconds / 60)) / 60,
      radius * 0.7,
      'black',
      6
    );

    this.drawClockHand(
      centerX,
      centerY,
      (2 * Math.PI * seconds) / 60,
      radius * 0.8,
      'black',
      2
    );
  }

  drawClockHand(x: number, y: number, angle: number, length: number, color: string, lineWidth: number) {
    const { context } = this;
    const handX = x + length * Math.cos(angle - Math.PI / 2);
    const handY = y + length * Math.sin(angle - Math.PI / 2);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(handX, handY);
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.stroke();
  }

  @action
  updateDisplay() {
    const now = new Date();
    const hours = now.getHours() % 24;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let currentEarthlyBranchIndex;

    // 查找当前时间所在的地支
    for (let i = 0; i < earthlyBranches.length; i++) {
      const times = earthlyBranches[i].times;
      const startHour = times[0];
      const endHour = times[1];

      if ((hours >= startHour && hours <= endHour) || (startHour > endHour && (hours >= startHour || hours <= endHour))) {
        currentEarthlyBranchIndex = i;
        break;
      }
    }

    this.currentShichen = earthlyBranches[currentEarthlyBranchIndex];
    this.time = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // 更新页面中的时间和地支显示
    // document.getElementById('currentTime').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    // document.getElementById('earthlyBranch').textContent = `属${currentEarthlyBranch}时`;
  }

  @computed
  jieqi() {
    return jieqi.getCurrentJieqi();
  }

  @computed
  jieqiObj() {
    return jieqi.getJieCurrentJieQiObj();
  }

  runClock() {
    this.interval = setInterval(() => {
      this.drawClock()
      this.updateDisplay();
    }, 1000);
  }

  destoryClock() {
    clearInterval(this.interval);
    this.canvas = null;
  }
}

export default new Clock();
