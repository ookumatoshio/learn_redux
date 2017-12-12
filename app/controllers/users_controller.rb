class UsersController < ApplicationController
  def index
    render json: { users: ['yukari', 'nana']}
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
