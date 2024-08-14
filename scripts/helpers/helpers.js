class Helpers {
  appendElements = (elements, destination) => {
    for (const element of elements) {
      destination.appendChild(element);
    }
  }
}

export default new Helpers;