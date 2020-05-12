const fs = require('fs')
const Intl = require('intl')
const data = require('./data.json')
const { age, graduation, date } = require('./utils')

exports.index = function (req, res) {
    return res.render('teachers/index', { teachers: data.teachers })
}

exports.post = function (req, res) {
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == '')
            return res.send('Por favor, preencha todos os campos.')
    }

    let { avatar_url, name, birth, education, class_type, services } = req.body
    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        education,
        class_type,
        services,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send('Write file error!')

        return res.redirect('/teachers')
    })
}

exports.show = function (req, res) {
    const { id } = req.params
    const foundTeacher = data.teachers.find(function (teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send('Professor não encontrado!')

    const teacher = {
        ...foundTeacher,
        services: foundTeacher.services.split(','),
        age: age(foundTeacher.birth),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
        education: graduation(foundTeacher.education)
    }

    return res.render('teachers/show', { teacher })
}

exports.edit = function (req, res) {
    const { id } = req.params
    const foundTeacher = data.teachers.find(function (teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send('Professor não encontrado!')

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    return res.render('teachers/edit', { teacher })
}

exports.put = function (req, res) {
    const { id } = req.body
    let index

    const foundTeacher = data.teachers.find(function (teacher, foundIndex) {
        if (teacher.id == id) {
            index = foundIndex
            return true
        }
    })

    if (!foundTeacher) return res.send('Professor não encontrado!')

    const teacher = {
        ...foundTeacher,
        ...req.body,
        id: Number(id),
        birth: Date.parse(req.body.birth)
    }

    data.teachers[index] = teacher

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send('Write file error!')

        return res.redirect(`/teachers/${id}`)
    })
}

exports.delete = function(req, res) {
    const { id } = req.body
    const filteredTeachers = data.teachers.filter(function(teacher){
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Write file error!')

        return res.redirect('/teachers')
    })
}