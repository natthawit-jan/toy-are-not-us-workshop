package com.group5.toyrnotus.repository;
import com.group5.toyrnotus.entity.Toy;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToyRepository extends CrudRepository<Toy, Integer> {
}
