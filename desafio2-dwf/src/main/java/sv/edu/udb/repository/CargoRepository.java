package sv.edu.udb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sv.edu.udb.domain.Cargo;

@Repository
public interface CargoRepository extends JpaRepository<Cargo, Integer> {
}
