class UsersController < ApplicationController
  def index
    sleep 2
    taro = { id: 1, name: :taro }
    hana = { id: 2, name: :hana }

    render json: { users: [taro, hana] };
  end

  def new
  end

  def create
    if (params[:user][:name].present?)
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
