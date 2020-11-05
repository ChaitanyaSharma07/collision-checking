
function collision(bulletSprite, wallSprite) {
    bulletRightEdge = bulletSprite.x + bulletSprite.width;
    wallLeftEdge = wallSprite.x;

    if (bulletRightEdge >= wallLeftEdge) {
        return true;
    } else {
        return false;
    }
}