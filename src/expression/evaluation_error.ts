export default class EvaluationError extends Error {

    constructor(message: string) {
        super(message)
        this.name = 'EvaluationError'
    }

}