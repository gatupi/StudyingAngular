
export enum HeartTypes { full, empty };

export class Heart {

    public static readonly dir: string = "../../assets/";
    public static readonly fullHeartImg: string = "coracao_cheio.png";
    public static readonly emptyHeartImg: string = "coracao_vazio.png";

    constructor(public type: HeartTypes,
        public fullHeartPath: string = Heart.dir + Heart.fullHeartImg,
        public emptyHeartPath: string = Heart.dir + Heart.emptyHeartImg) {

    }

    public get image(): string {
        return this.type == HeartTypes.full ?
            this.fullHeartPath : this.emptyHeartPath;
    }
}