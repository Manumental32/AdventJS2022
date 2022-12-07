function createCube(size) {
    let cube = '';
    let tops = '';
    let bottoms = '';
    const SPACE = ' ';
    const BREAK_LINE = '\n';
    const TOP_LEFT =  '/\\';
    const TOP_RIGHT = '_\\';
    const BOTTOM_LEFT =  '\\/';
    const BOTTOM_RIGHT = '_/';

    const lineTop = (index,size) => {
        return SPACE.repeat(size - (index+1)) + TOP_LEFT.repeat(index+1) + TOP_RIGHT.repeat(size) + BREAK_LINE ;
    }

    const lineBottom = (index,size) => {
        let response = '';
        response += SPACE.repeat(size - (size - index)) + BOTTOM_LEFT.repeat( size + (size - index-size)) + BOTTOM_RIGHT.repeat(size);
        response += BREAK_LINE;
        return response;
    }

    for (let index = 0; index < size; index++) {
        tops += lineTop(index, size);
        bottoms += lineBottom(index, size)
    }

    cube = tops + bottoms;
    cube = cube.replace(/\n$/, "");
    return cube;
}

console.log(createCube(3))

// "  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/"

// /\_\
// \/_/

// /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/
