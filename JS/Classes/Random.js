class Random {
    #children;
    #parent;

    constructor(children, parent) {
        this.#children = children;
        this.#parent = parent;
    }

    shuffleChildren(parent) {
        // children = enfant et parent = parent
        // enfant obtient valeur de parent+enfant
        let children = parent.children;
        // i obtient valeur de enfant.longueur, k et temp.
        let i = children.length, k, temp;

        // tant que --i est supérieur a 0
        while (--i > 0) {
            // floor = Renvoie le plus grand int plus petit ou égale a sa valeur numérique
            // floor (math(mathématique)concaténé avec random(entre 0 et 1)multiplié par (i + 1))
            k = Math.floor(Math.random() * (i + 1));
            // temp(temporaire) obtient la valeur d'enfant [K}
            temp = children[k];
            // enfant [k] obtient la valeur d'enfant [i]
            children[k] = children[i];
            // appele parent qui avec temp
            parent.appendChild(temp);
        }
        shuffleChildren();
    }

    get children() {
        return this.#children;
    }

    get parent() {
        return this.#parent;
    }

    set children(children) {
        this.#children = children;
    }

    set parent(parent) {
        this.#parent = parent;
    }

}

export default Random;