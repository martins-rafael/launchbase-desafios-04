module.exports = {
    age: function (timestamp) {
        const today = new Date()
        const birthday = new Date(timestamp)

        let age = today.getFullYear() - birthday.getFullYear()
        const month = today.getMonth() - birthday.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthday.getDate()) {
            age -= 1
        }

        return age
    },
    graduation: function (education) {
        return (education == 'medio') ? 'Ensino Médio Completo'
        : (education == 'superior') ? 'Ensino Superior Completo'
        : (education == 'mestrado') ? 'Mestrado'
        : 'Doutorado'
    },
    date: function (timestamp) {
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}