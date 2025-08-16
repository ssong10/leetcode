function simplifyPath(path: string): string {
    const deps = []

    const paths = path.split('/')

    for (let p of paths) {
        if (p === '' || p === '.' ) {
            continue
        }

        if (p === '..') {
            deps.pop()
        } else {
            deps.push(p)
        }
    }

    return '/' + deps.join('/')
};