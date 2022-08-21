
package com.portfolio.teins.Security.Repository;

import com.portfolio.teins.Security.Entity.Rol;
import com.portfolio.teins.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rol);
}
