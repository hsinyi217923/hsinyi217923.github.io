 class DrawLoad {
            constructor(canvas) {
                this.per = 0;
                this.canvas = document.getElementById(canvas); //獲取canvas元素
                this.context = this.canvas.getContext('2d'); //獲取畫圖环境，指明為2d
                this.centerX = this.canvas.width / 2; //Canvas中心點x軸座標
                this.centerY = this.canvas.height / 2; //Canvas中心點y軸座標
                this.rad = Math.PI * 2 / 100; //将360度分成100份，那么每一份就是this.rad度
                this.drawFrame();
            }
            /**
             * 設置百分比
             * @param 整数 0-100
             */
            setPer(per) {
                this.per = per;
            }
            // 清除動畫刷新
            clearAnimation() {
                window.cancelAnimationFrame(this.raf_id);
            }

            //繪製當前百分比圈
            currentCircle() {
                this.context.save();
                this.context.strokeStyle = "#54534E"; //設置描边样式
                this.context.lineWidth = 10; //設置线宽
                this.context.beginPath(); //路径开始
                this.context.arc(this.centerX, this.centerY, 50, -Math.PI / 2, -Math.PI / 2 + this.per * this.rad, false); //用于绘制圆弧this.context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
                this.context.stroke(); //繪製
                this.context.closePath(); //路径结束
                this.context.restore();
            }
            //繪製轨迹圈
            bgCircle() {
                this.context.save();
                this.context.beginPath();
                this.context.lineWidth = 10; //設置线宽
                this.context.strokeStyle = "#F8F6F7";
                this.context.arc(this.centerX, this.centerY,50, 0, Math.PI * 2, false);
                this.context.stroke();
                this.context.closePath();
                this.context.restore();
            }
            //百分比文字繪製
            text() {
                this.context.save(); //save和restore可以保證樣式属性只運用於該段canvas元素
                this.context.fillStyle = "#54534E"; //設置描邊樣式
                this.context.font = "22px Arial"; //設置字体大小和字体
                //繪製字体，并且指定位置
                this.context.fillText(this.per.toFixed(0) + "%", this.centerX - 22, this.centerY + 6);
                // this.context.stroke(); //执行繪製
                this.context.restore();
            }
            //動畫循環
            drawFrame() {
                this.raf_id = window.requestAnimationFrame(this.drawFrame.bind(this));
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.bgCircle();
                this.text();
                this.currentCircle();
            };
        }

   
    window.onload = () => {
        const dl = new DrawLoad('canvas');
        let i = 0;
        let iv = Number;
        iv = setInterval(() => {
            dl.setPer(++i);
            if (i > 70) {
                clearInterval(iv); // 清除
                dl.clearAnimation(); //清除動畫刷新
            }
        }, 20);
        const dl2 = new DrawLoad('canvas2');
        let i2 = 0;
        let iv2 = Number;
        iv2 = setInterval(() => {
            dl2.setPer(++i2);
            if (i2 > 75) {
                clearInterval(iv2); // 清除
                dl2.clearAnimation(); //清除動畫刷新
            }
        }, 20);
        const dl3 = new DrawLoad('canvas3');
        let i3 = 0;
        let iv3 = Number;
        iv3 = setInterval(() => {
            dl3.setPer(++i3);
            if (i3 > 60) {
                clearInterval(iv3); // 清除
                dl3.clearAnimation(); //清除動畫刷新
            }
        }, 20);
        const dl4 = new DrawLoad('canvas4');
        let i4 = 0;
        let iv4 = Number;
        iv4 = setInterval(() => {
            dl4.setPer(++i4);
            if (i4 > 80) {
                clearInterval(iv4); // 清除
                dl4.clearAnimation(); //清除動畫刷新
            }
        }, 20);
    }

