<?php

namespace App\Policies;

use App\Models\InstagramLink;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class InstagramLinkPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\InstagramLink  $instagramLink
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, InstagramLink $instagramLink)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\InstagramLink  $instagramLink
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, InstagramLink $instagramLink)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\InstagramLink  $instagramLink
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, InstagramLink $instagramLink)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\InstagramLink  $instagramLink
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, InstagramLink $instagramLink)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\InstagramLink  $instagramLink
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, InstagramLink $instagramLink)
    {
        //
    }
}
