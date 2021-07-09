export const goToSignupPage = (history) => {
    history.push("/signup")
}

export const goToLoginPage = (history) => {
    history.push("/")
}

export const goToCreateImagePage = (history) => {
    history.push("/create")
}

export const goToAllImagesPage = (history) => {
    history.push("/images/all")
}

export const goToImageDetailsPage = (history, id) => {
    history.push(`/images/${id}`)
}