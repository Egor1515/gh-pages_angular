import { TimeFormatPipe } from "../timeFormat.pipe";

describe('TimeFormatPipe', () => {
    let pipe: TimeFormatPipe
    beforeEach(() => {
        pipe = new TimeFormatPipe()
    })

    it('создаем инстанс пайпа', () => {
        expect(pipe).toBeTruthy()
    })

    it('Передано кратное 60 значение', () => {
        expect(pipe.transform(120)).toEqual('2h')
    })  

    it('Передано значение меньше 60', () => {
        expect(pipe.transform(59)).toEqual('59min')
    })
    
    it('Передано значение больше и не кратное 60', () => {
        expect(pipe.transform(84)).toEqual('1h 24min')
    })
})