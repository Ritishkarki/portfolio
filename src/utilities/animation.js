const Tl = TweenLite; // eslint-disable-line
const Tm = TweenMax; // eslint-disable-line

const handleComplete = target => Tl.set(target, {
    clearProps: 'position, width, height, borderRadius, transform',
});

export const handleEnterAnimation = (node) => {
    if (!node) return;
    // Cancel existing animations

    Tm.killTweensOf(node);
    const { parentNode } = node;
    let targetHeight = window.innerHeight;
    let targetWidth = parentNode.clientWidth - (parseFloat(getComputedStyle(parentNode).paddingLeft) * 2);
    let boxDimension = targetHeight > targetWidth ? targetWidth : targetHeight;

    // Set element position
    Tl.set(node, {//eslint-disable-line
        position: 'fixed',
        scale: 0,
        x: 0,
        y: 100,
        autoAlpha: 0,
        borderRadius: "50%",
        width: boxDimension,
        height: boxDimension
    });

    // Animate element
    Tl.to(node, .75, {//eslint-disable-line
        force3D: true,
        scale: 1,
        autoAlpha: 1,
        x: 0,
        y: 0,
        borderRadius:0,
        height: targetHeight,
        width: targetWidth,
        overflow:"hidden",
        onComplete: handleComplete, // Fire this when animation finishes
        onCompleteParams: [node]
    });
};

export const handleExitAnimation = (node) => {
    if (!node) return;
    // Cancel existing animations
    Tm.killTweensOf(node);//eslint-disable-line

    const { parentNode } = node;
    let targetHeight = window.innerHeight;
    let targetWidth = parentNode.clientWidth - (parseFloat(getComputedStyle(parentNode).paddingLeft) * 2);
    let boxDimension = targetHeight > targetWidth ? targetWidth : targetHeight;
    
    // Set element position
    Tl.set(node, {//eslint-disable-line
        position: 'fixed',
        x: 0,
        width: boxDimension,
        height: boxDimension,
        borderRadius:"50%",
        opacity:1
    });

    // Animate element
    Tl.to(node, 1.5, {//eslint-disable-line
        force3D: true,
        scale: 0,
        position: 'fixed',
        opacity: 0,
        width:0,
        height:0,
        x: -100,
        y: -100
        // I put this in here to force you to consider it as a hook
        // onComplete: () => console.log('Page exit complete.'),
    });
};

export const handleProjectDetailEnter = (node) => {
    console.log(node)
};

export const handleProjectDetailExit = (node) => {
    console.log(node)
};