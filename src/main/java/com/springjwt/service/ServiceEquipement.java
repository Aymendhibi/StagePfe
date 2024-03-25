package com.springjwt.service;

import com.springjwt.entities.Equipement;
import com.springjwt.entities.Station;
import com.springjwt.repositories.EquipementRepository;
import com.springjwt.repositories.StationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceEquipement implements IserviceEquipement {



    @Autowired
    EquipementRepository equipementRepository;
    @Autowired
    StationRepository stationRepository;



    public Equipement ajouterequipement(Equipement equipement)
    {
        return equipementRepository.save(equipement);
    }
    @Override
    public Equipement modifierEquipement(Equipement equipement) {

        equipement.setStation(equipement.getStation());
        equipementRepository.save(equipement);
        return equipement;
    }

    @Override
    public Equipement supprimerEquipement(Long equipementId) {
          equipementRepository.deleteById(equipementId);
        return null;
    }



    @Override
    public List<Equipement> afficher() {
        return equipementRepository.findAll();
    }


}
