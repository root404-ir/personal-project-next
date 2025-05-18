import dayjs from 'dayjs'
import jalali from 'jalaliday'


export const JalaliDate = (date) => {
    dayjs.extend(jalali)
    return dayjs(date).calendar('jalali').locale('fa').format('YYYY/MM/DD')
}