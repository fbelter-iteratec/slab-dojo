package de.otto.teamdojo.service.mapper;

import de.otto.teamdojo.domain.Badge;
import de.otto.teamdojo.service.dto.BadgeDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * Mapper for the entity Badge and its DTO BadgeDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface BadgeMapper extends EntityMapper<BadgeDTO, Badge> {


    @Mapping(target = "skills", ignore = true)
    Badge toEntity(BadgeDTO badgeDTO);

    default Badge fromId(Long id) {
        if (id == null) {
            return null;
        }
        Badge badge = new Badge();
        badge.setId(id);
        return badge;
    }
}
