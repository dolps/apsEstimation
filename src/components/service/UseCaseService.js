const getInsecurityFactor = (insecurityGrade) => {
    switch (Number(insecurityGrade)) {
        case 1:
            return {mostLikely: 1.3, worst: 1.8};
        case 2:
            return {mostLikely: 1.4, worst: 2.9};
        case 3:
            return {mostLikely: 2, worst: 6};
        default:
            throw new Error('Not a valid case: ');

    }
};

export const calculateBest = (developmentTime, estimationContext) => {
    let devTime = parseFloat(developmentTime);

    const designTime = (devTime * estimationContext.designAddon) / 100;
    const testTime = (devTime * estimationContext.testAddon) / 100;
    const totalDevelopmentTime = devTime + designTime + testTime;
    const mgmtTime = (totalDevelopmentTime * estimationContext.MGMTAddon) / 100;

    const res = devTime + designTime + testTime + mgmtTime;

    return parseFloat(res.toFixed(1));
};


export const calculateMostLikely = (developmentTime, estimationContext, insecurityGrade) => {
    const res = calculateBest(developmentTime, estimationContext) * getInsecurityFactor(insecurityGrade).mostLikely; // 2 == Høy usikkerhet for mostlikely
    return parseFloat(res.toFixed(1))
};

export const calculateWorst = (developmentTime, estimationContext, insecurityGrade) => {
    const res = calculateBest(developmentTime, estimationContext) * getInsecurityFactor(insecurityGrade).worst;
    return parseFloat(res.toFixed(1))
};

export const calculateExpected = (developmentTime, estimationContext, insecurityGrade) => {
    const best = calculateBest(developmentTime, estimationContext);
    const mostLikely = calculateMostLikely(developmentTime, estimationContext, insecurityGrade) * 4;
    const worst = calculateWorst(developmentTime, estimationContext, insecurityGrade);

    const res = ((best + mostLikely + worst) / 6).toFixed(1);
    return parseFloat(res);
};
