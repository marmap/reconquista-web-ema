import noticia from '../models/noticia';


// Mostrar todas las noticias
export const mostrarNoticias = async (req, res) => {
  try {
    const noticias = await noticia.findAll();
    res.json(noticias);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Mostrar una noticia
export const mostrarNoticia = async (req, res) => {
  try {
    const noticiaUno = await noticia.findAll({
      where: { id: req.params.id }
    });
    res.json(noticiaUno[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Crear publicacion
export const crearNoticias = async (req, res) => {
  try {
    await noticia.create(req.body);
    res.json({
      message: "¡Publicación creada correctamente!"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Actualizar publicacion
export const subirNoticia = async (req, res) => {
  try {
    await noticia.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({
      message: "¡Publicación actualizada correctamente!"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Eliminar noticia
export const eliminarNoticia = async (req, res) => {
  try {
    await noticia.destroy({
      where: { id: req.params.id }
    });
    res.json({
      message: "¡Publicación eliminada correctamente!"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
