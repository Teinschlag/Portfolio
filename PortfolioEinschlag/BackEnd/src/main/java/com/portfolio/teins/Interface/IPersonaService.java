package com.portfolio.teins.Interface;

import com.portfolio.teins.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Para traer una lista de persona
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
            
    //Eliminar un objeto que buscamos por ID
    public void deletePersona(Long id);
    
    //Buscar a una persona por ID
    public Persona findPersona(Long id);
}
