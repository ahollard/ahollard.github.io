(function (window, _) {
    window.WIDBDDHTHIEWIDBDDHTHIEWIHTITCDHTHDSSIGWSWTRIIMBAE = window.WIDBDDHTHIEWIDBDDHTHIEWIHTITCDHTHDSSIGWSWTRIIMBAE || {
        numz: {
            calculateDistance(pointA, pointB) {
                return ((pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2) ** (1 / 2);
            },
            getAngleDegrees(pointA, pointB) {
                const distanceX = pointB.x - pointA.x;
                const distanceY = pointB.y - pointA.y;
                const radians = Math.atan2(distanceY, distanceX);
                const degrees = radians * 180 / Math.PI;
                return degrees;
            },
            degreesToRadians(degrees) {
                return degrees * Math.PI / 180;
            },
            radiansToDegrees(radians) {
                return radians * 180 / Math.PI;
            },
        },
        phyz: {},
    };
}(window, window._));


