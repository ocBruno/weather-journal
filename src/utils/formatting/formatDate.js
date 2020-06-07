export function formatDate(date) {
    const weekdays = [
        'Domingo',
        'Segunda',
        'Terca',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sabado'
    ];
    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    const weekday = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    return {
        weekday: weekday,
        month: month,
        day: day,
        year: year
    }
}