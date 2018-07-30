

export default {
    show(target, cb, duration){
        return TweenMax
            .from(target, duration, {
                opacity: 1,
                width: 0,
                onComplete() {
                   cb();
                },
                ease: Elastic.easeOut.config(.25, 1),
            });
    },
    stackedAnimationShow(array, duration){
        return true;
    }
}